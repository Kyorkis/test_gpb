export const COMPLETED_LOADING_COMPONENTS = "COMPLETED_LOADING_COMPONENTS"

export const completeLoading=(action)=>({
    type:COMPLETED_LOADING_COMPONENTS,
    payload:action
})