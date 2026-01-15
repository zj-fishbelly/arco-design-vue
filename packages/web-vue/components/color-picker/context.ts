import { InjectionKey } from 'vue';

export interface ColorPickerContext {
  isEmptyColor: boolean;
  formatValue: string | null;
}

export const colorPickerInjectionKey: InjectionKey<ColorPickerContext> =
  Symbol('ArcoColorPicker');
