import Card from "./components/Cards"

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://imgs.search.brave.com/CU07Rj_DG26UH49RAQB93d0qf0dTvkraUQ_7df5Oruc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDIv/MTY1LzgxNi9zbWFs/bC9nb29nbGUtbG9n/by10cmFuc3BhcmVu/dC1mcmVlLXBuZy5w/bmc",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      payPerHour: "$42/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/8ua-LE6rZuBIQs6pyr0m3LR2UCCHhcmiOKKUSaYb2J0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9NaWNyb3Nv/ZnQvTWljcm9zb2Z0/LUxvZ28ud2luZS5z/dmc",
      companyName: "Microsoft",
      datePosted: "2 weeks ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      payPerHour: "$38/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/bZ-lYSs5AZc6gHsaH6wLDsUjiWKN5s2auLRVQlw_6bM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzk0LzUxLzg5/LzM2MF9GXzI5NDUx/ODk0MF9GQmZ3Wncz/MEhuV0JWOXB6RHA2/RUV2OXUxODVKTDZY/US5qcGc",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Cloud Support Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      payPerHour: "$35/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/LY2taOaJ164Exo29kfHpylmKkov2r0ZQx1tBlpuDi_s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/MTM1LzMyMC9zbWFs/bC9tZXRhLXNvY2lh/bC1tZWRpYS1zeW1i/b2wtbG9nby1kZXNp/Z24taWxsdXN0cmF0/aW9uLWZyZWUtdmVj/dG9yLmpwZw",
      companyName: "Meta",
      datePosted: "1 week ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      payPerHour: "$55/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/GPKwmn4KjOr8F6O2rcdbR0jOClWf5XuKUjk2C7UvGbQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTkv/NzY2LzE5MS9zbWFs/bC9hcHBsZS1sb2dv/LWFwcGxlLWljb24t/dHJhbnNwYXJlbnQt/ZnJlZS1wbmcucG5n",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: "$60/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/KQpemxieUCA8HLRoN5UxyEFV1Wmc7bE2uxRsyJ5f6sU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/Mjk3NjQ2ODdlYzc2/YjgyZmIyMWZjZTIu/cG5n",
      companyName: "Netflix",
      datePosted: "4 days ago",
      post: "Backend Developer",
      tag1: "Remote",
      tag2: "Mid Level",
      payPerHour: "$58/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/ZLYMukgPJuDswFGAhae79IjlFx-0j77zV1bAV1mf66c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy1tYXJjYXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzExL052aWRpYS1M/b2dvLTY1MHgzNjYu/cG5n",
      companyName: "NVIDIA",
      datePosted: "6 days ago",
      post: "AI/ML Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: "$72/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/17Z08VaemRypEXW6ZoaC2OUFu3e5iT08tP7EURsEw9Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mYWJy/aWticmFuZHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9BZG9i/ZS1Mb2dvLUhpc3Rv/cnktNC0xMjAweDc1/MC5wbmc",
      companyName: "Adobe",
      datePosted: "8 weeks ago",
      post: "UI/UX Engineer",
      tag1: "Part Time",
      tag2: "Mid Level",
      payPerHour: "$40/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/CVsnVZvOVAl3AyuiCJ6AMef0lB9yP07r6t3S8CJGd8M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMxLzIvdWJlci1s/b2dvLXBuZ19zZWVr/bG9nby0zMTcwNzEu/cG5n",
      companyName: "Uber",
      datePosted: "12 days ago",
      post: "Data Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: "$50/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/akh3t9k1NtRDVbgpVh5POJbWTlNClLyMCaaTjmphZj0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NWQ2ZGM2NzA1Mjhm/NWY3MjU1NDFjOWYv/NjVkZGM4MzQwZTM0/OGY0ODY0ZTE3Y2Y1/X2F2b2lkNy5hdmlm",
      companyName: "Salesforce",
      datePosted: "10 weeks ago",
      post: "DevOps Engineer",
      tag1: "Remote",
      tag2: "Mid Level",
      payPerHour: "$47/hr",
      location: "Mumbai, India"
    }
  ];

  console.log(jobOpenings);

  return (
    <div className="parent">

      {jobOpenings.map(function (elem, idx) {
        console.log(idx);
        return <div key = {idx}>
        <Card key = {idx} logo={elem.brandLogo} company={elem.companyName} date={elem.datePosted} post={elem.post}
          tag1={elem.tag1} tag2={elem.tag2} payment={elem.payPerHour} location={elem.location}
        />
        </div>
      })}
    </div>
  )
}

export default App