/**
 * Helper type to get the keys of an interface; useful for type safety when accessing object properties via string.
 *
 * **Example:** Ensure that the field property access a property that exists on the interface.
 * ```typescript
 * { header: 'UserName', field: <KeysOf<UserLicense>>'userName' }
 * ```
 * @param KnownValues The type, interface or object to get the keys of
 * @returns Union of the keys of the interface
 */
export type KeysOf<KnownValues> = keyof KnownValues;

/**
 * Helper type for autocomplete when accessing object properties via string literals, while allowing any string.
 *
 * **Example:** An icon pack with a known set of keys, but also allowing any string to be used as a key.
 * ```typescript
 * export let name: HintedKeys<KeysOf<typeof icons>>;
 * ```
 * @param KnownValues Type of literals to hint
 * @returns Type containing literals and string
 */
export type HintedKeys<KnownValues extends string> =
  | (string & {})
  | KnownValues;
