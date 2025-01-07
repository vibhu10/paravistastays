
import './SignUpOne.css'
export default function SignUpOne({setSignupPopup, email, setEmail, error, handleSignUp}){
    return(
        <div className="signup-popup">
        <button
          className="close-popup-btn"
          onClick={() => setSignupPopup(false)}
        >
          ✖
        </button>
        <h3 className="text-center mb-4">Sign up</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && (
              <small
                style={{
                  color: "red",
                  display: "block",
                  marginTop: "5px",
                }}
              >
                {error}
              </small>
            )}
          </div>
          <button
            onClick={handleSignUp}
            type="submit"
            className="btn btn-primary w-100 mb-3"
            style={{ background: "#198E78", border: "none" }}
          >
            Continue
          </button>
        </form>

        <div className="d-flex align-items-center my-3">
          <hr className="flex-grow-1" />
          <span className="mx-2 text-muted">or</span>
          <hr className="flex-grow-1" />
        </div>
        <div className="d-grid gap-3">
          <button
            className="btn btn-outline-primary d-flex align-items-center justify-content-center"
            style={{
              padding: "0.5rem 1rem",
              fontSize: "0.875rem",
              lineHeight: "1.2",
              borderWidth: "1px",
              borderRadius: "0.25rem",
              backgroundColor: "transparent",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.target.style.textDecoration = "underline"; // Add underline
            }}
            onMouseLeave={(e) => {
              e.target.style.textDecoration = "none"; // Remove underline
            }}
          >
            <i
              className="bi bi-facebook me-2"
              style={{
                fontSize: "1rem",
              }}
            ></i>{" "}
            Continue with Facebook
          </button>

          <button
            className="btn btn-outline-danger d-flex align-items-center justify-content-center"
            style={{
              padding: "0.5rem 1rem",
              fontSize: "0.875rem",
              lineHeight: "1.2",
              borderWidth: "1px",
              borderRadius: "0.25rem",
              backgroundColor: "transparent",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.target.style.textDecoration = "underline"; // Add underline
            }}
            onMouseLeave={(e) => {
              e.target.style.textDecoration = "none"; // Remove underline
            }}
          >
            <i
              className="bi bi-google me-2"
              style={{
                fontSize: "1rem",
              }}
            ></i>{" "}
            Continue with Google
          </button>

          <button
            className="btn btn-outline-dark d-flex align-items-center justify-content-center"
            style={{
              padding: "0.5rem 1rem",
              fontSize: "0.875rem",
              lineHeight: "1.2",
              borderWidth: "1px",
              borderRadius: "0.25rem",
              backgroundColor: "transparent",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.target.style.textDecoration = "underline"; // Add underline
            }}
            onMouseLeave={(e) => {
              e.target.style.textDecoration = "none"; // Remove underline
            }}
          >
            <i
              className="bi bi-apple me-2"
              style={{
                fontSize: "1rem",
              }}
            ></i>{" "}
            Continue with Apple
          </button>
        </div>
      </div>
    );
}