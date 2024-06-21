const getCurrentUserIP = async (ip: string = "") => {
  try {
    const response = await fetch(`https://ipwho.is/${ip}`);
    return await response.json();
  } catch (error) {
    return(error);
  }
}

export { getCurrentUserIP };
