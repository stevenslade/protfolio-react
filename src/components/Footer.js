import React from 'react';

const styles = {
    footerStyle: {
      backgroundColor: '#717E8E',
      position: 'absolute',
      left: 0,
      bottom: 0,
      right: 0,
      borderRadius: '10px',
      margin: '10px',
      marginRight: '20px',
    },
    greyColor: {
      backgroundColor: '#717E8E',
    },
    textStyle: {
      fontColor: 'black',
      backgroundColor: '#717E8E',
      margin: '15px',
    },
    iconStyle: {
        fontSize: '48px',
        color: 'blue',
        margin: '10px',
    },
  };

export default function Footer() {
  return (
    <div style={styles.footerStyle} className="container-fluid" >
      <footer className="footer"> 
        <div style={styles.footerStyle} className="row">
      
          <h1 style={styles.textStyle} className="col-5">Full Stack Software Engineer</h1>
          
          <a className="col-2" href="https://github.com/stevenslade"><i style={styles.iconStyle} className="bi bi-github"></i></a>
      
          <a className="col-2" href="https://www.linkedin.com/in/benjamin-slinde"><i style={styles.iconStyle} className="bi bi-linkedin"></i></a>

          <a className="col-2" href="https://stackexchange.com/users/21525143/benjamin-slinde"><i style={styles.iconStyle} className="bi bi-stack-overflow"></i></a>
          
        </div>
      </footer>
    </div>

  );
}

  