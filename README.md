# Mobile Boilerplate

Este é um boilerplate para desenvolvimento de aplicativos móveis usando **Expo**, **React Native** e **TypeScript**. Ele fornece uma estrutura inicial robusta, com suporte a navegação, testes unitários, linting e formatação de código, otimizada para projetos modernos de React Native.

## Propósito

O objetivo deste boilerplate é acelerar o desenvolvimento de aplicativos móveis ao oferecer:

- Uma base configurada com as melhores práticas para React Native.
- Integração com Expo para suporte multiplataforma (iOS, Android, Web).
- Ferramentas de teste e linting para garantir qualidade de código.
- Estrutura modular para componentes e navegação.

## Tecnologias Utilizadas

- **Expo (~53.0.16)**: Framework para desenvolvimento multiplataforma com React Native.
- **React Native (0.79.5)**: Biblioteca principal para construção de interfaces nativas.
- **TypeScript (~5.8.3)**: Adiciona tipagem estática para maior segurança e escalabilidade.
- **@react-navigation/native-stack (7.3.21)**: Navegação baseada em pilha para telas.
- **Jest (29.7.0) e @testing-library/react-native (13.2.0)**: Ferramentas para testes unitários.
- **ESLint (9.30.1) com plugins (react, react-native, @typescript-eslint)**: Análise e formatação de código.
- **Prettier (3.6.2)**: Formatação automática de código.
- **Axios (1.10.0)**: Cliente HTTP para requisições de API.

## Estrutura do Projeto

```
MobileBoilerplate/
├── assets/                     # Recursos estáticos (imagens, fontes, etc.)
│   ├── images/                 # Imagens
│   └── fonts/                  # Fontes
├── src/
│   ├── api/                 # Configuração de chamadas HTTP
│   ├── components/          # Componentes reutilizáveis
│   ├── screens/             # Telas do aplicativo
│   ├── navigation/          # Configuração de navegação
│   ├── services/            # Abstrações para APIs nativas
│   ├── hooks/               # Hooks customizados
│   ├── types/               # Tipos TypeScript
│   ├── utils/               # Funções utilitárias
│   ├── styles/              # Estilos globais
│   └── App.tsx              # Ponto de entrada
├── __tests__/             # Testes unitários
│   ├── components/        # Testes para componentes
│   └── screens/           # Testes para telas
├── jest.setup.js          # Configuração inicial do Jest
├── eslint.config.js       # Configuração do ESLint
├── tsconfig.json          # Configuração do TypeScript
├── package.json           # Dependências e scripts
└── README.md              # Este arquivo
```

## Pré-requisitos

- **Node.js**: Versão 18.x ou superior.
- **pnpm**: Gerenciador de pacotes (instale com `npm install -g pnpm`).
- **Expo CLI**: Instale globalmente com `npm install -g expo-cli`.

## Instalação

1. Clone o repositório:

   ```bash
   git clone <seu-repositório> MobileBoilerplate
   cd MobileBoilerplate
   ```

2. Instale as dependências:

   ```bash
   pnpm install
   ```

3. Inicie o projeto:
   ```bash
   pnpm start
   ```

## Scripts Disponíveis

- `pnpm start`: Inicia o aplicativo no Expo (iOS, Android ou Web).
- `pnpm android`: Executa no emulador Android.
- `pnpm ios`: Executa no simulador iOS (requer Xcode).
- `pnpm web`: Inicia a versão web.
- `pnpm test`: Executa os testes com Jest em modo watch.
- `pnpm lint`: Verifica e corrige erros com ESLint.
- `pnpm format`: Formata o código com Prettier.

## Configurações

- **TypeScript**: Configurado com `tsconfig.json` para suportar JSX (`react-jsx`) e arquivos `.tsx`.
- **Jest**: Usa `jest-expo` como preset, com `transformIgnorePatterns` para transformar dependências React Native.
- **ESLint**: Configurado com Flat Config para TypeScript, React e React Native, incluindo globals do Jest.
- **Testes**: Suporte a `@testing-library/react-native` para testes de componentes.

## Contribuindo

1. Faça um fork do repositório.
2. Crie uma branch para sua feature: `git checkout -b feature/nova-feature`.
3. Commit suas mudanças: `git commit -m 'Adiciona nova feature'`.
4. Envie para o repositório: `git push origin feature/nova-feature`.
5. Abra um Pull Request.

## Licença

Este projeto está sob a [MIT License](LICENSE) - veja o arquivo `LICENSE` para detalhes.
