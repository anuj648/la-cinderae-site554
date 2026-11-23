import React from 'react';
import { handleLegacyClick, handleLegacySubmit } from '../shared/actions.js';

export default function SizeGuidePage() {
  return (
    <div className="page-content" onClick={handleLegacyClick} onSubmit={handleLegacySubmit}>
<section className={"page-hero"}><div className={"eyebrow"}>Find your fit</div><h1 className={"page-title"}>Size Guide</h1><p>Use our measurement guide to find your considered fit.</p></section><section className={"content-narrow"}><h2>Women's apparel</h2><p>Measurements are body measurements in centimetres. If you are between sizes, we recommend choosing the larger size for a relaxed fit.</p><table className={"size-table"}><tr><th>Size</th><th>Bust</th><th>Waist</th><th>Hip</th></tr><tr><td>XS</td><td>80–84</td><td>62–66</td><td>88–92</td></tr><tr><td>S</td><td>84–88</td><td>66–70</td><td>92–96</td></tr><tr><td>M</td><td>88–94</td><td>70–76</td><td>96–102</td></tr><tr><td>L</td><td>94–100</td><td>76–82</td><td>102–108</td></tr><tr><td>XL</td><td>100–106</td><td>82–88</td><td>108–114</td></tr></table><h2>How to measure</h2><p>Bust: measure around the fullest part. Waist: measure around the natural waist. Hip: measure around the fullest part of the hips.</p><a className={"btn outline"} href={"contact-us.html"}>Need help with sizing?</a></section>
    </div>
  );
}
