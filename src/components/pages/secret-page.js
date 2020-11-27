import React from 'react';

const SecretPage = ({isLoggedIn}) => {
  if (isLoggedIn) {
    return (
      <div>
        <h3>Here are lots of secrets!!!</h3>
      </div>
    );
  }

  return (
    <p>You should not see this page!!!</p>
  );
};

export default SecretPage;