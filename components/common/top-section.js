export default ({ imageUrl }) => {
  return (
    <div>
      <style jsx>
        {`
          div {
            min-height: 60vh;
            background: url(${imageUrl});
            background-attachment: fixed;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          }
        `}
      </style>
    </div>
  );
};
