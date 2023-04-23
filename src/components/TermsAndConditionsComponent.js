const TermsAndConditionsComponent = () => {
  return (
    <>
      <h2 style={{ marginTop: 70, marginLeft: 5 }}>წესები და პირობები</h2>
      <div className="terms-container">
        <details>
          <summary>
            როდის იწყება და რა ფორმატით გაიმართება აქცია{" "}
            <i className="fas fa-chevron-down"></i>
          </summary>
          <p>terms&conditions</p>
        </details>
        <details>
          <summary>
            როგორ მივიღო აქციაში მონაწილეობა?{" "}
            <i className="fas fa-chevron-down"></i>
          </summary>
          <p>terms&conditions</p>
        </details>
        <details>
          <summary>
            სხვადასხვა <i className="fas fa-chevron-down"></i>
          </summary>
          <p>terms&conditions</p>
        </details>
      </div>
    </>
  );
};

export default TermsAndConditionsComponent;
