import React from "react";

export default function SignUpForm({setFirstName, setLastName, setDob, setPassword, handleCompleteSignUp, firstName, lastName, dob, password, error, email}) {

return(

    
    <div className="signup2-container">
<h2>Finish Signing Up</h2>
<div className="signup2-input-group">
  <label htmlFor="first-name">First Name</label>
  <input
    type="text"
    id="first-name"
    placeholder="First Name"
    value={firstName}
    onChange={(e) => setFirstName(e.target.value)}
    />
</div>
<div className="signup2-input-group">
  <label htmlFor="last-name">Last Name</label>
  <input
    type="text"
    id="last-name"
    placeholder="Last Name"
    value={lastName}
    onChange={(e) => setLastName(e.target.value)}
    />
</div>
<div className="signup2-input-group">
  <label htmlFor="dob">Date of Birth</label>
  <input
    type="date"
    id="dob"
    value={dob}
    onChange={(e) => setDob(e.target.value)}
    />
</div>
   <div className="signup2-input-group">
  <label htmlFor="Email">Email</label>
  <input
    type="email"
    id="email"
    value={email} 
    disabled
    
    />
</div>
<div className="signup2-input-group">
  <label htmlFor="password">Password</label>
  <input
    type="password"
    id="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />
</div>
<p className="signup2-agree">
  By selecting Agree and Continue, I agree to the Terms of Service, 
  Payments Terms of Service, and Nondiscrimination Policy, and acknowledge the Privacy Policy.
</p>
<div className="signup2-checkbox-group">
  <input type="checkbox" id="marketing" />
  <label htmlFor="marketing">I don't want to receive marketing messages from paradise.</label>
</div>
<button
  onClick={handleCompleteSignUp}
  className="btn btn-primary w-100"
  style={{ background: "#198E78", border: "none" }}
>
  Agree and Continue
</button>
{error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
</div>

)
}