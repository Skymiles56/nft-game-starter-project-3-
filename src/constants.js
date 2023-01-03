const CONTRACT_ADDRESS = '0x97D7C862353d6564bd454425FDAfbeaeB29a2Fd3';
  const transformCharacterData = (characterData) => {
    return{
    name: characterData.name,
      imageURI: characterData.imageURI,
      hp: characterData.hp.toNumber(),
      maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),  
    };
  };
export { CONTRACT_ADDRESS, transformCharacterData };