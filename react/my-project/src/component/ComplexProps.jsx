function UserProfileCard({user, theme, actions}){

  return(
    <div className={`p-6 rounded-xl ${theme.background} ${theme.text} ${theme.card}`}>
      <div >{user.avatar}</div>
      <span>{user.role}</span>
    </div>
  )

}

function ComplexProps() {
  const users = [
  {
    user: {
      id: 101,
      name: "Hope",
      username: "hope_dev",
      avatar: "🧑‍💻",
      email: "hope@example.com",
      role: "Admin",
      isLoggedIn: true,
      preferences: {
        language: "en",
        notifications: true,
        timezone: "IST"
      }
    },

    theme: {
      background: "bg-slate-900",
      text: "text-white",
      card: "bg-slate-800 rounded-xl shadow-md p-4"
    },

    actions: {
      primary: {
        label: "Save Changes",
        onClick: () => {
          console.log("Primary action clicked for Hope");
        },
        className:
          "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
      },
      secondary: {
        label: "Cancel",
        onClick: () => {
          console.log("Secondary action clicked for Hope");
        },
        className:
          "bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg font-medium"
      }
    }
  },

  {
    user: {
      id: 102,
      name: "Alex",
      username: "alex_ui",
      avatar: "🎨",
      email: "alex@example.com",
      role: "Editor",
      isLoggedIn: false,
      preferences: {
        language: "en",
        notifications: false,
        timezone: "UTC"
      }
    },

    theme: {
      background: "bg-white",
      text: "text-slate-900",
      card: "bg-slate-100 rounded-xl shadow p-4"
    },

    actions: {
      primary: {
        label: "Submit",
        onClick: () => {
          console.log("Primary action clicked for Alex");
        },
        className:
          "bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium"
      },
      secondary: {
        label: "Reset",
        onClick: () => {
          console.log("Secondary action clicked for Alex");
        },
        className:
          "border border-slate-300 hover:bg-slate-100 text-slate-800 px-4 py-2 rounded-lg font-medium"
      }
    }
  }
];

  return (
    <div className=" text-white">
        <h1>Complex Props</h1>
        <div>
          {users.map((userData, index)=>(
            <UserProfileCard key={index} {...userData}/>
          ))}
        </div>
    </div>
  )
}

export default ComplexProps
