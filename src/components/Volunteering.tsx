"use client";

import { motion } from "framer-motion";
import { Heart, ExternalLink } from "lucide-react";

const volunteering = [
    {
        organization: "Associazione Ferramatori Trentino Alto Adige",
        role: "Member",
        period: "Jan 2019 - Present",
        website: "https://www.ferramatori.com",
        description:
            "Active member of a railway culture association operating in Northern Italy, focused on the autonomous provinces of Trento and Bolzano. The association promotes railway culture through model railroading, video production, and photography while creating opportunities for social interaction and engagement for young people through this constructive hobby.",
        responsibilities: [
            "Maintain and update the association's official website, ensuring reliability, usability, and up-to-date content",
            "Provide technical support for the association's online presence and digital activities",
            "Support the dissemination of knowledge and practical construction of railway models",
        ],
    },
];

export const Volunteering = () => {
    return (
        <section id="volunteering" className="py-24">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-center gap-3 mb-12">
                    <Heart className="text-primary" size={32} />
                    <h2 className="text-3xl md:text-4xl font-bold text-center">Volunteering</h2>
                </div>
                <div className="max-w-3xl mx-auto space-y-6">
                    {volunteering.map((activity, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-primary mb-1">
                                        {activity.organization}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        {activity.role} • {activity.period}
                                    </p>
                                    {activity.website && (
                                        <a
                                            href={activity.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                                        >
                                            <ExternalLink size={14} />
                                            {activity.website.replace("https://", "")}
                                        </a>
                                    )}
                                </div>
                                <Heart className="text-primary/50 flex-shrink-0" size={24} />
                            </div>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                {activity.description}
                            </p>
                            {activity.responsibilities && activity.responsibilities.length > 0 && (
                                <div className="mt-4 pt-4 border-t border-white/10">
                                    <h4 className="text-sm font-semibold mb-2 text-primary/80">
                                        Key Responsibilities:
                                    </h4>
                                    <ul className="space-y-2">
                                        {activity.responsibilities.map((resp, idx) => (
                                            <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                <span>{resp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

