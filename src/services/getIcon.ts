const getIcon = async (symbol: string) => {
  try {
    const { default: Icon } = await import(
      `../assets/color/${symbol.toLowerCase()}.svg`
    );
    return Icon;
  } catch (error) {
    const { default: Icon } = await import(`../assets/color/.noicon.svg`);
    return Icon;
  }
};

export default getIcon;
