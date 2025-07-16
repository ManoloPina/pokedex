import React from 'react';
import { IStat } from '@/model/Pokemon';

interface StatsProps {
  stats: IStat[];
}

const statLabels: Record<string, string> = {
  hp: 'HP',
  attack: 'Ataque',
  defense: 'Defesa',
  'special-attack': 'Sp. ataque',
  'special-defense': 'Sp. defesa',
  speed: 'Velocidade',
};

const MAX_STAT = 200; // Ajuste conforme necessário
const BARS = 5;

const Stats: React.FC<StatsProps> = ({ stats }) => (
  <div className="flex flex-col gap-4">
    <h3 className="font-semibold text-sm font-inter text-[#4D5053]">Stats</h3>
    <ul className="flex flex-col gap-3">
      {stats.map((stat) => {
        const percent = Math.min(stat.base_stat / MAX_STAT, 1);
        const totalBars = BARS;
        const filledBars = percent * totalBars;

        return (
          <li key={stat.stat.name} className="flex items-center gap-4">
            <span className="w-[80px] text-[#7A7D80] font-inter font-normal text-xs">
              {statLabels[stat.stat.name] || stat.stat.name}
            </span>
            <div className="flex gap-2 flex-1 max-w-[220px]">
              {Array.from({ length: totalBars }).map((_, i) => {
                // Calcula o preenchimento de cada barra (0 a 1)
                const fill = Math.min(Math.max(filledBars - i, 0), 1);
                return (
                  <div
                    key={i}
                    className="h-[3px] w-full rounded-full bg-gray-200 overflow-hidden"
                  >
                    <div
                      className="h-full"
                      style={{
                        width: `${fill * 100}%`,
                        background: fill > 0 ? '#dc2626' : 'transparent',
                        transition: 'width 0.3s',
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </li>
        );
      })}
    </ul>
  </div>
);

export default React.memo(Stats);
