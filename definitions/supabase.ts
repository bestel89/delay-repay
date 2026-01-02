export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      clicks: {
        Row: {
          created_at: string
          dest_url: string
          id: number
          operator_code: string
          referrer: string | null
        }
        Insert: {
          created_at?: string
          dest_url: string
          id?: number
          operator_code: string
          referrer?: string | null
        }
        Update: {
          created_at?: string
          dest_url?: string
          id?: number
          operator_code?: string
          referrer?: string | null
        }
        Relationships: []
      }
      kb_articles: {
        Row: {
          body_md: string
          id: string
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          body_md: string
          id?: string
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          body_md?: string
          id?: string
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      operators: {
        Row: {
          active: boolean
          claim_url: string
          code: string
          delay_repay: boolean
          id: string
          name: string
          website_url: string | null
        }
        Insert: {
          active?: boolean
          claim_url: string
          code: string
          delay_repay?: boolean
          id?: string
          name: string
          website_url?: string | null
        }
        Update: {
          active?: boolean
          claim_url?: string
          code?: string
          delay_repay?: boolean
          id?: string
          name?: string
          website_url?: string | null
        }
        Relationships: []
      }
      rules_default: {
        Row: {
          band: Database["public"]["Enums"]["delay_band"]
          id: number
          percent: number
          ticket: Database["public"]["Enums"]["ticket_type"]
        }
        Insert: {
          band: Database["public"]["Enums"]["delay_band"]
          id?: number
          percent: number
          ticket: Database["public"]["Enums"]["ticket_type"]
        }
        Update: {
          band?: Database["public"]["Enums"]["delay_band"]
          id?: number
          percent?: number
          ticket?: Database["public"]["Enums"]["ticket_type"]
        }
        Relationships: []
      }
      rules_override: {
        Row: {
          band: Database["public"]["Enums"]["delay_band"]
          id: number
          operator_code: string | null
          percent: number
          ticket: Database["public"]["Enums"]["ticket_type"]
        }
        Insert: {
          band: Database["public"]["Enums"]["delay_band"]
          id?: number
          operator_code?: string | null
          percent: number
          ticket: Database["public"]["Enums"]["ticket_type"]
        }
        Update: {
          band?: Database["public"]["Enums"]["delay_band"]
          id?: number
          operator_code?: string | null
          percent?: number
          ticket?: Database["public"]["Enums"]["ticket_type"]
        }
        Relationships: [
          {
            foreignKeyName: "rules_override_operator_code_fkey"
            columns: ["operator_code"]
            isOneToOne: false
            referencedRelation: "operators"
            referencedColumns: ["code"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      delay_band: "15-29" | "30-59" | "60-119" | "120+"
      ticket_type:
        | "single"
        | "return"
        | "season_weekly"
        | "season_monthly"
        | "season_annual"
        | "season_flexi"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      delay_band: ["15-29", "30-59", "60-119", "120+"],
      ticket_type: [
        "single",
        "return",
        "season_weekly",
        "season_monthly",
        "season_annual",
        "season_flexi",
      ],
    },
  },
} as const
