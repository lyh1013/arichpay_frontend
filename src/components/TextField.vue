<script setup lang="ts">
const attrs = useAttrs()

const id = ref(`text-field-${useId()}`)

const label = computed(() => attrs?.label as string | undefined)
const spinner = computed(() => attrs?.spinner as boolean)
const fieldName = computed(() => attrs?.name as string)

const { value, errorMessage: errorMessages } = useField(
  () => fieldName.value ?? id.value,
  undefined,
  {
    label,
  },
)
</script>

<template>
  <v-text-field
    v-model="value"
    :error-messages
    :disabled="spinner"
    density="compact"
    variant="outlined"
    v-bind="{
      ...$attrs,
      id,
    }"
    rounded="lg"
  >
    <template v-if="$slots.append" #append>
      <slot name="append" />
    </template>
    <template v-if="$slots['append-inner']" #append-inner>
      <slot name="append-inner" />
    </template>
    <template v-if="$slots.prepend" #prepend>
      <slot name="prepend" />
    </template>
    <template v-if="$slots['prepend-inner']" #prepend-inner>
      <slot name="prepend-inner" />
    </template>
  </v-text-field>
</template>

<style scoped></style>
