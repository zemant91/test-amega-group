import React, {useCallback, useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {CartesianChart, Line} from 'victory-native';

const Charts = () => {
  const [timer, setTimer] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [connection, setConnection] = useState<boolean>(false);
  const [ws, setWs] = useState<WebSocket>(
    new WebSocket('wss://stream.binance.com:443/ws/dogeusdt'),
  );
  const [data, setData] = useState<
    unknown & {seconds: number; price: number}[]
  >([
    {
      seconds: 0,
      price: 0,
    },
  ]);

  useEffect(() => {
    ws.onopen = () => {
      setConnection(true);
    };
    ws.onclose = e => {
      console.log('Disconnected. Check internet or server.');
      setConnection(false);
    };
    ws.onerror = e => {
      console.log(e.message);
      setConnection(false);
    };
    ws.onmessage = e => {
      if (timer % 1 === 0) {
        const wsData = JSON.parse(e.data);
        if (wsData.p) {
          setData(prev => [
            ...prev,
            {
              price: parseFloat(wsData.p) * 100 - Math.random() * 30,
              seconds: timer,
            },
          ]);
          setPrice(wsData.p);
        }
      }
    };
  }, [data, timer]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    if (connection) {
      ws.send(
        JSON.stringify({
          method: 'SUBSCRIBE',
          params: ['dogeusdt@aggTrade'],
          id: 1,
        }),
      );
    }
  }, [connection]);

  useFocusEffect(
    useCallback(() => {
      return () => {
        ws.close();
      };
    }, []),
  );
  return (
    <>
      <View style={styles.container}>
        <CartesianChart
          data={data}
          xKey="seconds"
          yKeys={['price']}
          axisOptions={{}}>
          {({points}) => (
            <Line points={points.price} color="red" strokeWidth={1} />
          )}
        </CartesianChart>
      </View>
      <View>
        <Text>DOGE/USDT: {price}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {height: 300},
});

export default Charts;
