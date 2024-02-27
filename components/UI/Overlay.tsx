import AbsolutePositionedContainer from './AbsolutePositionedContainer';

const Overlay = () => {
  return (
    <AbsolutePositionedContainer
      width="100%"
      height="100%"
      top={0}
      left={0}
      sx={{
        backgroundColor: 'rgba(0,0,0,0.3)'
      }}
      defaultPos></AbsolutePositionedContainer>
  );
};

export default Overlay;
