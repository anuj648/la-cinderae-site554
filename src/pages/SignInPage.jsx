import React from 'react';
import { handleLegacyClick, handleLegacySubmit } from '../shared/actions.js';

export default function SignInPage() {
  return (
    <div className="page-content" onClick={handleLegacyClick} onSubmit={handleLegacySubmit}>
<section className={"auth-wrap"}><div className={"eyebrow"} style={{"textAlign": "center"}}>WELSTENFORDE / MY ACCOUNT</div><h1>Welcome back</h1><p style={{"textAlign": "center", "lineHeight": "1.8"}}>Sign in to access your orders and saved pieces.</p><form data-legacy-onsubmit={"event.preventDefault();toast('Demo account form submitted');location.href='my-account.html'"}><input className={"field"} type={"email"} placeholder={"Email address"} required={""} /><input className={"field"} type={"password"} placeholder={"Password"} required={""} /><button className={"btn"} style={{"width": "100%", "marginTop": "12px"}}>Sign in</button></form><p style={{"textAlign": "center", "marginTop": "25px"}}>New to WELSTENFORDE? <a href={"create-account.html"}><u>Create account</u></a></p></section>
    </div>
  );
}
