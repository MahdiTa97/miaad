const DotsSquare = ({ ...props }) => (
  <svg viewBox="0 0 52 24" fill="currentColor" {...props}>
    <defs>
      <pattern
        id="700c93bf-0068-4e32-aafe-ef5b6a647708"
        x="0"
        y="0"
        width=".135"
        height=".30"
      >
        <circle cx="1" cy="1" r=".7" />
      </pattern>
    </defs>
    <rect
      fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
      width="52"
      height="24"
    />
  </svg>
)

export default DotsSquare
