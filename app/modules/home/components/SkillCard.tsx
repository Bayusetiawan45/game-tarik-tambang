import Tooltip from '@/app/common/components/elements/Tooltip';
import { STACKS } from '@/app/common/constant/stacks';
import React from 'react';

export default function SkillCard({ skill }: { skill: string }) {
  return (
    <div className="w-8">
      <Tooltip title={skill}>{STACKS[skill]}</Tooltip>
    </div>
  );
}
