// Repete propriedades do environment default, mas com valores diferentes
export const environment = {
  production: true,
  apiUrl: 'https://launchs-api.herokuapp.com',

  tokenAllowedDomains: [/launchs-api.herokuapp.com/], // Domínios permitidos para o token ser enviado
  tokenDisallowedRoutes: [/\/oauth\/token/] // Domínios não permitidos para o envio de token
};
