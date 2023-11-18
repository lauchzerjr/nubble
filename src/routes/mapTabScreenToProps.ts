import { CIconProps } from '@components';

import { AppTabNavigatorParamList } from './AppTabNavigator';

export const mapTabScreenToProps: Record<
  keyof AppTabNavigatorParamList,
  {
    label: string;
    icon: {
      focused: CIconProps['name'];
      unfocused: CIconProps['name'];
    };
  }
> = {
  HomeScreen: {
    label: 'Início',
    icon: {
      focused: 'homeFill',
      unfocused: 'home',
    },
  },
  NewPostScreen: {
    label: 'Novo post',
    icon: {
      focused: 'newPost',
      unfocused: 'newPost',
    },
  },
  FavoriteScreen: {
    label: 'Favorito',
    icon: {
      focused: 'bookmarkFill',
      unfocused: 'bookmark',
    },
  },
  MyProfileScreen: {
    label: 'Meu perfil',
    icon: {
      focused: 'profileFill',
      unfocused: 'profile',
    },
  },
};
