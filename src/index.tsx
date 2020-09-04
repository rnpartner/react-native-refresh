import { NativeModules } from 'react-native';

type RefreshType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Refresh } = NativeModules;

export default Refresh as RefreshType;
