export default [
  {
    name: 'collaborators',
    url: '/collaborators',
    permissions: 'collaborators.manageCollaborators',
  },
  {
    name: 'recruitment',
    url: '/recruitment',
    permissions: 'recruitment.manageRecruitment',
  },
  {
    name: 'suppliers_clients',
    url: '/suppliers',
    permissions: 'suppliers.manageSuppliers',
  },
  {
    name: 'crm',
    url: '/crm',
    permissions: 'crm.manageCrm',
  },
  {
    name: 'pay',
    url: '/pay',
    permissions: 'pay.managePay',
  },
  {
    name: 'administration',
    url: '/administration',
    permissions: 'administration.manageAdministration',
  },
  {
    name: 'pilotage',
    url: process.env.NEXT_PUBLIC_PILOTAGE_URL,
    icon: 'fas fa-chart-line',
    permissions: 'pilotage.managePilotage',
  },
]
