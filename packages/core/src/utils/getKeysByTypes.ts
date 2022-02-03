import { castArray } from 'lodash';
import { PlateEditor } from '../types/PlateEditor';

/**
 * Get plugin keys by types
 */
export const getKeysByTypes = <T = {}>(
  editor: PlateEditor<T>,
  type: string | string[]
) => {
  const types = castArray<string>(type);

  const found = Object.values(editor.pluginsByKey).filter((plugin) => {
    return types.includes(plugin.type);
  });

  return found.map((p) => p.key);
};