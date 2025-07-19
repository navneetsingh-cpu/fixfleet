const LogoSvg = () => {
  return (
    <svg width="220" height="60" viewBox="0 0 220 60" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
          <stop offset="0%" style={{ stopColor: "#00BFFF", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#1E90FF", stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      <g fontFamily="Segoe UI, sans-serif" font-weight="bold" font-size="28">
        <text x="5" y="38" fill="url(#grad)">Fix</text>
        <text x="50" y="38" fill="currentColor">Fleet</text>
      </g>
    </svg>
  )
}

export default LogoSvg
