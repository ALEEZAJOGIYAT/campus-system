<form >
  
  <div className="col-md-6">
    <label for="validationServer03" className="form-label">Email</label>
    <input type="email" className="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required/>
    <div id="validationServer03Feedback" className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationServer05" className="form-label">Password</label>
    <input type="password" className="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required/>
    <div id="validationServer05Feedback" className="invalid-feedback">
      Please provide a valid password.
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required>
      <label className="form-check-label" for="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div id="invalidCheck3Feedback" className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>