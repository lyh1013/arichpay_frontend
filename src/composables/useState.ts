import { shallowRef } from 'vue'

export function useState(initalState: boolean) {
  const state = shallowRef(initalState)

  function update(newState: boolean) {
    state.value = newState
  }

  return [state, update]
}
