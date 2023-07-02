import { InvitationInterface } from 'interfaces/invitation';
import { ParticipationInterface } from 'interfaces/participation';
import { RaffleInterface } from 'interfaces/raffle';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface StartupInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  invitation?: InvitationInterface[];
  participation?: ParticipationInterface[];
  raffle?: RaffleInterface[];
  user?: UserInterface;
  _count?: {
    invitation?: number;
    participation?: number;
    raffle?: number;
  };
}

export interface StartupGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
