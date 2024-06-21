import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getCurrentUserIP } from "../../../api";
import { IPInfo } from "../../../types";
import IPInfoBlock from "./IPInfoBlock.tsx";

interface IIPTracker {
  collectIpInfo: (ipInfo: IPInfo) => void
}

const IPTracker: React.FC<IIPTracker> = ({ collectIpInfo }) => {
  const [ip, setIp] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [ipInfo, setIpInfo] = useState<IPInfo>(undefined);

  const validateIPaddress = (ipaddress: string): boolean => {
    return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress);
  }

  const inputIp = (ip: string) => {
    setError("");
    setIp(ip);
  }

  const searchIp = async () => {
    if (!validateIPaddress(ip)) {
      setError('error')
      return false
    }

    await handleIpSearch();
  };

  const handleIpSearch = async () => {
    try {
      const result = await getCurrentUserIP(ip);
      setIpInfo(result);
      collectIpInfo(result);
    } catch (error) {
      setError('Unexpected error. Try again later.');
      setIpInfo(undefined);
    }
  }

  useEffect(() => {
    void handleIpSearch();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>IP TRACKER</Text>
      </View>
      <View>
        <TextInput
          value={ip}
          onChangeText={inputIp}
          style={styles.input}
        />
        {error && <Text style={styles.error}>{error}</Text>}
        <Button title={"Search IP"} onPress={searchIp}/>
      </View>

      <IPInfoBlock ipInfo={ipInfo}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { padding: 30 },
  titleContainer: { alignItems: 'center' },
  title: { fontSize: 32, fontWeight: '700' },
  input: { borderWidth: 1, padding: 8, borderRadius: 12 },
  error: { color: 'red' },
})

export default IPTracker;
