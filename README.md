# Aplicativo-para-Mapear-Problemas-Urbanos
cidadaoconectado
CidadaoConectado/
├── App.tsx                        # Arquivo principal que configura a navegação entre as telas
├── app.json                       # Configuração do Expo para o aplicativo
├── babel.config.js                # Configuração do Babel para o React Native
├── node_modules/                  # Dependências do projeto
├── package.json                   # Dependências e scripts do projeto
├── tsconfig.json                  # Configuração do TypeScript
├── assets/                        # Pasta para imagens e ícones do app
│   └── icon.png                   # Exemplo de um ícone (adicione outros conforme necessário)
└── src/                           # Pasta principal para o código-fonte
    ├── firebaseConfig.ts          # Configuração do Firebase
    ├── components/                # Componentes reutilizáveis
    │   └── CustomButton.tsx       # Exemplo de componente de botão personalizado (opcional)
    ├── screens/                   # Pasta para telas do aplicativo
    │   ├── LoginScreen.tsx        # Tela de Login com autenticação do Firebase
    │   ├── ReportScreen.tsx       # Tela para registrar problemas com geolocalização e Firebase
    │   └── MapScreen.tsx          # Tela com o mapa e marcadores para problemas reportados
    └── styles/                    # Pasta para estilos do projeto (opcional)
        └── globalStyles.ts        # Arquivo de estilos globais (opcional)
