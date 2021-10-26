import React from 'react';

const cardContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  border: '1px solid green',
};

const cardStyle = {
  width: '320px',
  height: '180px',
  backgroundColor: '#bae9ff',
  borderRadius: '12px',
  marginRight: '20px',
  marginBottom: '20px',
  boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Button = ({ params = [1, 2, 3, 4, 5] }) => {
  return (
    <div style={cardContainerStyle}>
      {params.map((e, i) => (
        <div key={i} style={cardStyle}>
          <p>Card {i}</p>
        </div>
      ))}
    </div>
  );
};

export default Button;
