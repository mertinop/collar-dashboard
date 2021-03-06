import Layout from './components/Layout'
import Dashboard from './views/Dashboard'
import UsuariosLista from './views/Usuarios/Lista'
import UsuariosCrear from './views/Usuarios/Crear'
import UsuariosVer from './views/Usuarios/Ver'
import UsuariosEditar from './views/Usuarios/Editar'
import UsuariosMascotasCrear from './views/Usuarios/MascotasCrear'

import MascotasLista from './views/Mascotas/Lista'
import MascotasEditar from './views/Mascotas/Editar'
import MascotasVer from './views/Mascotas/Ver'
import MascotasAlertar from './views/Mascotas/Alertar'

import Perfil from './views/Perfil'
import PerfilEditar from './views/PerfilEditar'

export default [
    {
        path: '/vet',
        name: 'vet',
        component: Layout,
        redirect: { name: 'Dashboard' },
        meta: { requiresAuth: true },
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: Dashboard
            },
            {
                path: 'clientes',
                name: 'Usuarios',
                component: UsuariosLista,
            },
            {
                path: 'clientes/crear',
                name: 'UsuariosCrear',
                component: UsuariosCrear,
            },
            {
                path: 'clientes/:id_usuario',
                props: true,
                name: 'UsuariosVer',
                component: UsuariosVer,
            },
            {
                path: 'clientes/:id_usuario/editar',
                props: true,
                name: 'UsuariosEditar',
                component: UsuariosEditar,
            },
            {
                path: 'clientes/:id_usuario/mascotas/crear',
                props: true,
                name: 'UsuariosMascotasCrear',
                component: UsuariosMascotasCrear,
            },
            {
                path: 'clientes/:id_usuario/mascotas/:id_mascota',
                props: true,
                name: 'UsuariosMascotasVer',
                component: MascotasVer,
            },
            {
                path: 'clientes/:id_usuario/mascotas/:id_mascota/editar',
                props: true,
                name: 'UsuariosMascotasEditar',
                component: MascotasEditar,
            },
            {
                path: 'clientes/:id_usuario/mascotas/:id_mascota/alertar/:tipo',
                props: true,
                name: 'UsuariosMascotasAlertar',
                component: MascotasAlertar
            },
            {
                path: 'mascotas',
                name: 'Mascotas',
                component: MascotasLista,
            },
            {
                path: 'mascotas/:id_mascota',
                props:true,
                name: 'MascotasVer',
                component: MascotasVer
            },
            {
                path: 'mascotas/:id_mascota/editar',
                name: 'MascotasEditar',
                props: true,
                component: MascotasEditar,
            },
            {
                path: 'mascotas/:id_mascota/alertar/:tipo',
                props: true,
                name: 'MascotasAlertar',
                component: MascotasAlertar
            },
            {
                path: 'perfil',
                name: 'PerfilVet',
                component: Perfil
            },
            {
                path: 'perfil/editar',
                name: 'PerfilVetEditar',
                component: PerfilEditar
            }
        ]
    },
];