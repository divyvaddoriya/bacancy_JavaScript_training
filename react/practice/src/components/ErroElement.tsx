type ErrorElementProps = {
  errorMsg?: string
}

const ErrorElement = ({ errorMsg }: ErrorElementProps) => {
  if (!errorMsg) return null

  return (
    <p style={{ color: "red", fontSize: "14px" }}>
      {errorMsg}
    </p>
  )
}

export default ErrorElement