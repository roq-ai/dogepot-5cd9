const mapping: Record<string, string> = {
  invitations: 'invitation',
  participations: 'participation',
  raffles: 'raffle',
  startups: 'startup',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
