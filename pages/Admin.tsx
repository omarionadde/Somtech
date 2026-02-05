import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line
} from 'recharts';
import { Users, Eye, FileText, Settings, LogOut, Bell, Search, Plus, Save, X, Trash2, Briefcase, Truck, User } from 'lucide-react';
import { AVAILABLE_ICONS, ICON_MAP } from '../constants';
import { db, Inquiry } from '../lib/db';
import { BlogPost, Project, Service, TeamMember, Testimonial } from '../types';

const chartData = [
  { name: 'Jan', visits: 4000, inquiries: 240 },
  { name: 'Feb', visits: 3000, inquiries: 139 },
  { name: 'Mar', visits: 2000, inquiries: 980 },
  { name: 'Apr', visits: 2780, inquiries: 390 },
  { name: 'May', visits: 1890, inquiries: 480 },
  { name: 'Jun', visits: 2390, inquiries: 380 },
];

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [team, setTeam] = useState<TeamMember[]>([]);

  // Modals
  const [modalType, setModalType] = useState<'none' | 'post' | 'service' | 'project' | 'team'>('none');
  
  // Forms State
  const [newPost, setNewPost] = useState({ title: '', excerpt: '', image: '' });
  const [newService, setNewService] = useState({ titleEn: '', titleSo: '', descEn: '', descSo: '', iconName: 'Briefcase' });
  const [newProject, setNewProject] = useState({ title: '', category: '', image: '', descEn: '', descSo: '' });
  const [newTeamMember, setNewTeamMember] = useState({ name: '', role: '', image: '' });

  const refreshData = () => {
    setInquiries(db.getInquiries());
    setPosts(db.getPosts());
    setServices(db.getServices());
    setProjects(db.getProjects());
    setTeam(db.getTeam());
  };

  useEffect(() => {
    refreshData();
  }, [activeTab]);

  const stats = db.getStats();

  // Handlers
  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    db.addPost(newPost);
    setModalType('none');
    setNewPost({ title: '', excerpt: '', image: '' });
    refreshData();
  };

  const handleCreateService = (e: React.FormEvent) => {
    e.preventDefault();
    db.addService({
      id: Date.now().toString(),
      title: { en: newService.titleEn, so: newService.titleSo },
      description: { en: newService.descEn, so: newService.descSo },
      iconName: newService.iconName
    });
    setModalType('none');
    setNewService({ titleEn: '', titleSo: '', descEn: '', descSo: '', iconName: 'Briefcase' });
    refreshData();
  };

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    db.addProject({
      id: Date.now().toString(),
      title: newProject.title,
      category: newProject.category,
      image: newProject.image,
      description: { en: newProject.descEn, so: newProject.descSo }
    });
    setModalType('none');
    setNewProject({ title: '', category: '', image: '', descEn: '', descSo: '' });
    refreshData();
  };

  const handleCreateTeamMember = (e: React.FormEvent) => {
    e.preventDefault();
    db.addTeamMember({
      id: Date.now(),
      name: newTeamMember.name,
      role: newTeamMember.role,
      image: newTeamMember.image
    });
    setModalType('none');
    setNewTeamMember({ name: '', role: '', image: '' });
    refreshData();
  };

  // Generic delete handler wrapper
  const handleDelete = (type: 'post' | 'service' | 'project' | 'team', id: any) => {
    if (confirm('Are you sure you want to delete this item?')) {
      if (type === 'post') db.deletePost(id);
      if (type === 'service') db.deleteService(id);
      if (type === 'project') db.deleteProject(id);
      if (type === 'team') db.deleteTeamMember(id);
      refreshData();
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-somtech-blue text-white flex flex-col hidden md:flex sticky top-0 h-screen overflow-y-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold">Somtech Admin</h2>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <button onClick={() => setActiveTab('dashboard')} className={`flex items-center gap-3 w-full px-4 py-3 rounded transition ${activeTab === 'dashboard' ? 'bg-somtech-accent text-somtech-blue font-bold' : 'hover:bg-white/10'}`}>
            <Eye size={20} /> Dashboard
          </button>
          <button onClick={() => setActiveTab('services')} className={`flex items-center gap-3 w-full px-4 py-3 rounded transition ${activeTab === 'services' ? 'bg-somtech-accent text-somtech-blue font-bold' : 'hover:bg-white/10'}`}>
            <Briefcase size={20} /> Services
          </button>
          <button onClick={() => setActiveTab('projects')} className={`flex items-center gap-3 w-full px-4 py-3 rounded transition ${activeTab === 'projects' ? 'bg-somtech-accent text-somtech-blue font-bold' : 'hover:bg-white/10'}`}>
            <Truck size={20} /> Projects
          </button>
           <button onClick={() => setActiveTab('team')} className={`flex items-center gap-3 w-full px-4 py-3 rounded transition ${activeTab === 'team' ? 'bg-somtech-accent text-somtech-blue font-bold' : 'hover:bg-white/10'}`}>
            <Users size={20} /> Team
          </button>
          <button onClick={() => setActiveTab('blog')} className={`flex items-center gap-3 w-full px-4 py-3 rounded transition ${activeTab === 'blog' ? 'bg-somtech-accent text-somtech-blue font-bold' : 'hover:bg-white/10'}`}>
            <FileText size={20} /> Blog
          </button>
        </nav>
        <div className="p-6">
            <button className="flex items-center gap-2 text-red-300 hover:text-white transition">
                <LogOut size={18} /> Logout
            </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col max-h-screen overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center shrink-0 z-10">
            <div className="md:hidden font-bold text-somtech-blue">Somtech Admin</div>
            <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 w-full max-w-md mx-4 md:mx-0">
                <Search size={18} className="text-gray-400" />
                <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none ml-2 w-full text-sm" />
            </div>
            <div className="flex items-center gap-4">
                <button className="relative text-gray-500 hover:text-somtech-blue">
                    <Bell size={20} />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center">
                   <User className="text-gray-500" />
                </div>
            </div>
        </header>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto flex-1">
            {activeTab === 'dashboard' && (
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800">Overview</h2>
                    
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="text-gray-500 text-sm mb-1">Total Inquiries</div>
                            <div className="text-3xl font-bold text-somtech-blue">{stats.inquiriesCount}</div>
                            <div className="text-green-500 text-xs mt-2 flex items-center">{stats.newInquiriesCount} new</div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="text-gray-500 text-sm mb-1">Services Active</div>
                            <div className="text-3xl font-bold text-somtech-blue">{stats.servicesCount}</div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="text-gray-500 text-sm mb-1">Projects</div>
                            <div className="text-3xl font-bold text-somtech-blue">{stats.projectsCount}</div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="text-gray-500 text-sm mb-1">Blog Posts</div>
                            <div className="text-3xl font-bold text-somtech-blue">{stats.postsCount}</div>
                        </div>
                    </div>

                    {/* Recent Inquiries List from DB */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="font-bold text-gray-700">Recent Contact Requests</h3>
                        </div>
                        {inquiries.length === 0 ? (
                            <div className="p-6 text-center text-gray-500">No inquiries yet.</div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                                        <tr>
                                            <th className="px-6 py-3">Name</th>
                                            <th className="px-6 py-3">Subject</th>
                                            <th className="px-6 py-3">Date</th>
                                            <th className="px-6 py-3">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-sm">
                                        {inquiries.slice(0, 5).map(inq => (
                                            <tr key={inq.id}>
                                                <td className="px-6 py-4 font-medium">{inq.name}</td>
                                                <td className="px-6 py-4">{inq.subject}</td>
                                                <td className="px-6 py-4">{inq.date}</td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-2 py-1 rounded-full text-xs ${inq.status === 'new' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                                                        {inq.status.toUpperCase()}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {activeTab === 'services' && (
                 <div className="space-y-6">
                     <div className="flex justify-between items-center">
                         <h2 className="text-2xl font-bold text-gray-800">Services Management</h2>
                         <button onClick={() => setModalType('service')} className="bg-somtech-blue text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-900 transition">
                             <Plus size={16} /> Add Service
                         </button>
                     </div>
                     <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                         <div className="grid gap-4">
                             {services.map(s => {
                                 const Icon = ICON_MAP[s.iconName] || Briefcase;
                                 return (
                                     <div key={s.id} className="flex items-center justify-between p-4 bg-gray-50 rounded border border-gray-100">
                                         <div className="flex items-center gap-4">
                                             <div className="p-2 bg-white rounded shadow-sm"><Icon size={20} className="text-somtech-blue" /></div>
                                             <div>
                                                 <div className="font-bold">{s.title.en}</div>
                                                 <div className="text-xs text-gray-500">{s.description.en.substring(0, 50)}...</div>
                                             </div>
                                         </div>
                                         <button onClick={() => handleDelete('service', s.id)} className="text-red-500 hover:bg-red-50 p-2 rounded transition"><Trash2 size={18} /></button>
                                     </div>
                                 );
                             })}
                         </div>
                     </div>
                </div>
            )}

            {activeTab === 'projects' && (
                 <div className="space-y-6">
                     <div className="flex justify-between items-center">
                         <h2 className="text-2xl font-bold text-gray-800">Projects Portfolio</h2>
                         <button onClick={() => setModalType('project')} className="bg-somtech-blue text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-900 transition">
                             <Plus size={16} /> Add Project
                         </button>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                         {projects.map(p => (
                             <div key={p.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden relative group">
                                 <img src={p.image} alt={p.title} className="w-full h-32 object-cover" />
                                 <div className="p-4">
                                     <div className="text-xs text-somtech-accent font-bold uppercase mb-1">{p.category}</div>
                                     <h3 className="font-bold mb-1">{p.title}</h3>
                                     <p className="text-xs text-gray-500">{p.description.en.substring(0, 60)}...</p>
                                 </div>
                                 <button onClick={() => handleDelete('project', p.id)} className="absolute top-2 right-2 bg-white/90 text-red-500 p-2 rounded-full shadow hover:bg-red-500 hover:text-white transition"><Trash2 size={16} /></button>
                             </div>
                         ))}
                     </div>
                </div>
            )}

            {activeTab === 'team' && (
                 <div className="space-y-6">
                     <div className="flex justify-between items-center">
                         <h2 className="text-2xl font-bold text-gray-800">Team Members</h2>
                         <button onClick={() => setModalType('team')} className="bg-somtech-blue text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-900 transition">
                             <Plus size={16} /> Add Member
                         </button>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                         {team.map(t => (
                             <div key={t.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-4 relative">
                                 <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover" />
                                 <div>
                                     <div className="font-bold">{t.name}</div>
                                     <div className="text-sm text-gray-500">{t.role}</div>
                                 </div>
                                 <button onClick={() => handleDelete('team', t.id)} className="absolute top-4 right-4 text-gray-300 hover:text-red-500"><Trash2 size={18} /></button>
                             </div>
                         ))}
                     </div>
                </div>
            )}

            {activeTab === 'blog' && (
                <div className="space-y-6">
                     <div className="flex justify-between items-center">
                         <h2 className="text-2xl font-bold text-gray-800">Blog Posts</h2>
                         <button onClick={() => setModalType('post')} className="bg-somtech-blue text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-900 transition">
                             <Plus size={16} /> New Post
                         </button>
                     </div>
                     <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                         <div className="grid gap-4">
                             {posts.map(post => (
                                 <div key={post.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded border border-gray-100">
                                     <img src={post.image} className="w-16 h-12 object-cover rounded" alt="blog" />
                                     <div className="flex-1">
                                        <div className="font-medium">{post.title}</div>
                                        <div className="text-xs text-gray-500">{post.date}</div>
                                     </div>
                                     <button onClick={() => handleDelete('post', post.id)} className="text-red-500 text-sm hover:underline"><Trash2 size={18} /></button>
                                 </div>
                             ))}
                         </div>
                     </div>
                </div>
            )}
        </div>

        {/* Modals */}
        {modalType !== 'none' && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
                    <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50 sticky top-0">
                        <h3 className="font-bold text-gray-800">
                            {modalType === 'post' && 'New Blog Post'}
                            {modalType === 'service' && 'New Service'}
                            {modalType === 'project' && 'New Project'}
                            {modalType === 'team' && 'New Team Member'}
                        </h3>
                        <button onClick={() => setModalType('none')} className="text-gray-500 hover:text-red-500">
                            <X size={20} />
                        </button>
                    </div>
                    
                    <div className="p-6">
                        {modalType === 'post' && (
                            <form onSubmit={handleCreatePost} className="space-y-4">
                                <input required placeholder="Title" value={newPost.title} onChange={e => setNewPost({...newPost, title: e.target.value})} className="w-full px-3 py-2 border rounded outline-none focus:border-somtech-blue" />
                                <input required placeholder="Excerpt" value={newPost.excerpt} onChange={e => setNewPost({...newPost, excerpt: e.target.value})} className="w-full px-3 py-2 border rounded outline-none focus:border-somtech-blue" />
                                <input required placeholder="Image URL" value={newPost.image} onChange={e => setNewPost({...newPost, image: e.target.value})} className="w-full px-3 py-2 border rounded outline-none focus:border-somtech-blue" />
                                <button type="submit" className="w-full py-2 bg-somtech-blue text-white rounded hover:bg-blue-900">Save</button>
                            </form>
                        )}
                        
                        {modalType === 'service' && (
                            <form onSubmit={handleCreateService} className="space-y-4">
                                <input required placeholder="Title (English)" value={newService.titleEn} onChange={e => setNewService({...newService, titleEn: e.target.value})} className="w-full px-3 py-2 border rounded outline-none focus:border-somtech-blue" />
                                <input required placeholder="Title (Somali)" value={newService.titleSo} onChange={e => setNewService({...newService, titleSo: e.target.value})} className="w-full px-3 py-2 border rounded outline-none focus:border-somtech-blue" />
                                <textarea required placeholder="Description (English)" value={newService.descEn} onChange={e => setNewService({...newService, descEn: e.target.value})} className="w-full px-3 py-2 border rounded outline-none focus:border-somtech-blue" />
                                <textarea required placeholder="Description (Somali)" value={newService.descSo} onChange={e => setNewService({...newService, descSo: e.target.value})} className="w-full px-3 py-2 border rounded outline-none focus:border-somtech-blue" />
                                <select value={newService.iconName} onChange={e => setNewService({...newService, iconName: e.target.value})} className="w-full px-3 py-2 border rounded outline-none focus:border-somtech-blue">
                                    {AVAILABLE_ICONS.map(icon => <option key={icon} value={icon}>{icon}</option>)}
                                </select>
                                <button type="submit" className="w-full py-2 bg-somtech-blue text-white rounded hover:bg-blue-900">Save</button>
                            </form>
                        )}

                        {modalType === 'project' && (
                            <form onSubmit={handleCreateProject} className="space-y-4">
                                <input required placeholder="Project Title" value={newProject.title} onChange={e => setNewProject({...newProject, title: e.target.value})} className="w-full px-3 py-2 border rounded outline-none focus:border-somtech-blue" />
                                <input required placeholder="Category" value={newProject.category} onChange={e => setNewProject({...newProject, category: e.target.value})} className="w-full px-3 py-2 border rounded outline-none focus:border-somtech-blue" />
                                <input required placeholder="Image URL" value={newProject.image} onChange={e => setNewProject({...newProject, image: e.target.value})} className="w-full px-3 py-2 border rounded outline-none focus:border-somtech-blue" />
                                <textarea required placeholder="Description (English)" value={newProject.descEn} onChange={e => setNewProject({...newProject, descEn: e.target.value})} className="w-full px-3 py-2 border rounded outline-none focus:border-somtech-blue" />
                                <textarea required placeholder="Description (Somali)" value={newProject.descSo} onChange={e => setNewProject({...newProject, descSo: e.target.value})} className="w-full px-3 py-2 border rounded outline-none focus:border-somtech-blue" />
                                <button type="submit" className="w-full py-2 bg-somtech-blue text-white rounded hover:bg-blue-900">Save</button>
                            </form>
                        )}

                        {modalType === 'team' && (
                            <form onSubmit={handleCreateTeamMember} className="space-y-4">
                                <input required placeholder="Full Name" value={newTeamMember.name} onChange={e => setNewTeamMember({...newTeamMember, name: e.target.value})} className="w-full px-3 py-2 border rounded outline-none focus:border-somtech-blue" />
                                <input required placeholder="Role" value={newTeamMember.role} onChange={e => setNewTeamMember({...newTeamMember, role: e.target.value})} className="w-full px-3 py-2 border rounded outline-none focus:border-somtech-blue" />
                                <input required placeholder="Image URL" value={newTeamMember.image} onChange={e => setNewTeamMember({...newTeamMember, image: e.target.value})} className="w-full px-3 py-2 border rounded outline-none focus:border-somtech-blue" />
                                <button type="submit" className="w-full py-2 bg-somtech-blue text-white rounded hover:bg-blue-900">Save</button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        )}

      </main>
    </div>
  );
};

export default Admin;
