import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createStackNavigator(
    {
      // pages
      Main,
      User,
    },
    {
      headerLayoutPreset: 'center', // set title no centro
      headerBackTitleVisible: false, // impedi que o text voltar surja no ios ao invés da <-
      defaultNavigationOptions: {
        // configs. padrões para todas as telas
        headerStyle: {
          backgroundColor: '#7159c1', // cor do header
        },
        headerTintColor: '#FFF', // cor de qualquer outra coisa presente no header
      },
    }
  )
);

export default Routes;
