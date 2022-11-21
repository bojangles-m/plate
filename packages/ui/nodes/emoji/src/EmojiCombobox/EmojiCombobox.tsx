import React from 'react';
import { ComboboxOnSelectItem, Data, NoData } from '@udecode/plate-combobox';
import { getPluginOptions, usePlateEditorRef } from '@udecode/plate-core';
import {
  ELEMENT_EMOJI,
  EmojiPluginOptions,
  getEmojiOnSelectItem,
} from '@udecode/plate-emoji';
import { Combobox, ComboboxProps } from '@udecode/plate-ui-combobox';
import { EmojiComboboxItem } from './EmojiComboboxItem';

export interface EmojiComboboxProps<TData extends Data = NoData>
  extends Partial<ComboboxProps<TData>> {
  pluginKey?: string;
  onSelectItem?: ComboboxOnSelectItem<TData> | null;
}

export const useEmojiCombobox = (pluginKey: string) => {
  const editor = usePlateEditorRef();
  const { trigger } = getPluginOptions<EmojiPluginOptions>(editor, pluginKey);

  const onSelectItem: ComboboxOnSelectItem<Data> = getEmojiOnSelectItem({
    key: pluginKey,
  });

  return {
    trigger: trigger!,
    onSelectItem,
  };
};

export const EmojiCombobox = <TData extends Data = NoData>({
  pluginKey = ELEMENT_EMOJI,
  id = pluginKey,
  ...props
}: EmojiComboboxProps<TData>) => {
  const { trigger, onSelectItem } = useEmojiCombobox(pluginKey);

  return (
    <Combobox
      id={id}
      trigger={trigger}
      controlled
      onSelectItem={onSelectItem}
      onRenderItem={EmojiComboboxItem}
      {...props}
    />
  );
};
