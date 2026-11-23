import React from 'react';
import { handleLegacyClick, handleLegacySubmit } from '../shared/actions.js';

export default function CreateAccountPage() {
  return (
    <div className="page-content" onClick={handleLegacyClick} onSubmit={handleLegacySubmit}>
<section className={"auth-wrap"}><div className={"eyebrow"} style={{"textAlign": "center"}}>WELSTENFORDE / MY ACCOUNT</div><h1>Create account</h1><p style={{"textAlign": "center", "lineHeight": "1.8"}}>Join WELSTENFORDE for a more considered experience.</p><form data-legacy-onsubmit={"event.preventDefault();toast('Demo account form submitted');location.href='my-account.html'"}><input className={"field"} placeholder={"Full name"} required={""} /><input className={"field"} type={"email"} placeholder={"Email address"} required={""} /><input className={"field"} type={"password"} placeholder={"Password"} required={""} /><button className={"btn"} style={{"width": "100%", "marginTop": "12px"}}>Create account</button></form><p style={{"textAlign": "center", "marginTop": "25px"}}>Already have an account? <a href={"sign-in.html"}><u>Sign in</u></a></p></section>
    </div>
  );
}
