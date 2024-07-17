import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Aos from 'aos';
import 'aos/dist/aos.css';

interface Team {
  id: number;
  name: string;
  members: User[];
}

interface User {
  id: number;
  user: string;
  rank: string;
}

const Team: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    getAdminTeam();
  }, []);

  const getAdminTeam = () => {
    axios.get('/api/team')
      .then(response => {
        setTeams(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(true);
      });
  }

  const teamNames: { [key: string]: string } = {
    'majitel': 'Majitel',
    'tr_staff': 'Trial Staff',
    'admin': 'Vedení Projektu',
    'h.dev': 'Developer Team',
    'h.technik': 'Technik Team',
    'h.helper': 'Helper Team',
    'h.builder': 'Builder Team',
    'e.helper': 'Helper Team',
    'e.builder': 'Builder Team',
    'dev': 'Developer Team',
    'technik': 'Technik Team',
    'helper': 'Helper Team',
    'builder': 'Builder Team',
    'moderator': 'Moderator',
    'z.helper': 'Helper Team',
    'z.dev': 'Developer Team',
    'z.builder': 'Builder Team',
  };

  const formatRank = (rank: string): string => {
    return teamNames[rank] || rank;
  }

  const setBackground = (rank: string): string => {
    const colors: { [key: string]: string[] } = {
      'majitel': ['#E31616', '#E25151'],
      'tr_staff': ['#D07B7B', '#EC7171'],
      'h.dev': ['#CB42CD', '#EF00B8'],
      'h.helper': ['#42CD51', '#00EF1A'],
      'h.builder': ['#4498DB', '#41C1FF'],
      'dev': ['#eab308', '#c2410c'],
      'moderator': ['#4498DB', '#41C1FF'],
      'helper': ['#3ECF3C', '#3FDB69'],
      'builder': ['#7DACE0', '#4AA8E9'],
    };

    return colors[rank] ? `-webkit-linear-gradient(0, ${colors[rank][0]} 0%, ${colors[rank][1]} 100%)` : '';
  }

  const renderTeam = (team: Team) => {
    return (
      <div className="at-sekce">
        <a className="font-bold uppercase text-[25px] text-sky-600 text-opacity-[75] py-[6px] rounded-[6px]">
          &nbsp;&nbsp;<p>{team.name}</p>&nbsp;
        </a>
        <div className="members">
          {team.members.map(user => (
            <div className="member" key={user.id} data-aos="fade-up">
              <img src={`https://visage.surgeplay.com/bust/${user.user}`} onError={(e) => { e.currentTarget.src = 'https://visage.surgeplay.com/bust/X-Steve' }} alt="Skin člena AT" width={150} height={150} className="block mx-auto" />
              <p className="nickname text-center text-[18px] my-[5px]">{user.user}</p>
              <p className="rank text-center text-[18px] text-[#fff] py-[5px] px-[25px] rounded-[50px]" style={{background:setBackground(user.rank)}}>{formatRank(user.rank)}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="team">
      <div className="container mx-auto px-4">
        {loading? <div className="loader"></div> : null}
  
        <div>
          {teams.map(team => (
            <div key={team.id}>{renderTeam(team)}</div>
          ))}
        </div>
  
      </div>
    </div>
  );
}

export default Team;