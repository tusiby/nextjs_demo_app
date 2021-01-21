export const getServerSideProps = async ({ res }) => {
  res.setHeader("location", `/posts`)

  res.statusCode = 302;
  res.end();

  return { props: {} };
};

const Index = () => <></>

export default Index