export const goToHome = (history) => {
  history.push('/smarts-dashboard')
}

export const goToCustomerDetails = (history, id) => {
  history.push(`/customer/${id}`)
}

export const goBack = (history) => {
  history.goBack()
}