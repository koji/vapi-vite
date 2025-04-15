interface VapiError {
  vapiError: {
    error: {
      statusCode: number
      error: string
    }
  }
}

export const isPublicKeyMissingError = ({ vapiError }: VapiError) => {
  return (
    !!vapiError &&
    vapiError.error.statusCode === 403 &&
    vapiError.error.error === 'Forbidden'
  )
}
