using ChatApp.Core.DTO;
using ChatApp.DB;
using System.Threading.Tasks;

namespace ChatApp.Core
{
    public interface IUserService
    {
        Task<AuthenticatedUser> SignUp(User user);
        Task<AuthenticatedUser> SignIn(User user);
        Task<AuthenticatedUser> ExternalSignIn(User user);
    }
}
