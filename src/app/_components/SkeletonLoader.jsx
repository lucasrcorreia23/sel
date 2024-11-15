import MoonLoader from "react-spinners/MoonLoader";

const SkeletonLoader = () => (
  <div style={loaderOverlayStyle}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <MoonLoader color="#2b95ff" size={40} loading speedMultiplier={1} />
    </div>
  </div>
);

const loaderOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  backgroundColor: 'rgba(255, 255, 255, 1)', // Cor de fundo
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999, // Certifique-se de que está acima do header e footer
};

const logoContainerStyle = {
  backgroundColor: '#12284c', // Cor azul-marinho
  padding: '8px', // Padding ao redor do logotipo
  borderRadius: '4px', // Bordas arredondadas
  marginBottom: '20px', // Espaço entre o logotipo e o círculo
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const logoStyle = {
  width: '120px', // Largura do logotipo (ajuste conforme necessário)
};

export default SkeletonLoader;
