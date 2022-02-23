const About = () => {
  return (
    <section className="container about">
      <div>
        <h2>About The App</h2>
        <p>
          This application uses the{' '}
          <a
            href="https://www.docs.bscscan.com/api-endpoints"
            target="_blank"
            rel="noopener noreferrer"
          >
            BscScan
          </a>{' '}
          API to fetch the balance and some transaction on an address.
        </p>
        <p>
          <span>Disclaimer:</span> This application is not in any way affliated
          to the Binance Smart Chain.
        </p>
        <p>@Cypher &copy;2022</p>
      </div>
    </section>
  );
};
export default About;
