function RightMenu({ x, y, showMenu, menuOptions }) {
  const { changeType } = menuOptions;

  const style = () => {
    return {
      height: 200,
      width: 150,
      borderRadius: 10,
      backgroundColor: '#FF5C58',
      color: '#FCD2D1',
      flexDirection: 'column',
      padding: 10,
      top: y,
      left: x,
      position: 'absolute',
      display: showMenu ? 'flex' : 'none',
    };
  };

  return (
    <div style={style()}>
      <div style={styles.div} onClick={changeType}>
        Button 1
      </div>
      <div style={{ ...styles.div, ...styles.margin }}>Button 2</div>
      <div style={styles.div}>Button 3</div>
    </div>
  );
}

const styles = {
  div: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FE8F8F',
    color: '#FFEDD3',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  margin: {
    margin: '10px 0',
  },
};

export default RightMenu;
