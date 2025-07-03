import React from "react";
import { motion } from "framer-motion";
import {
    Music,
    Gamepad2,
    Camera,
    Plane,
    Medal,
    Instagram,
    Code,
    Trophy,
} from "lucide-react";

const MoreAbout = () => {
    return (
        <section
            id="more"
            className="pt-20 pb-20 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto"
        >
            <motion.h2
                className="text-5xl text-center font-bold"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                More <span className="text-cyan-400">About Me</span>
            </motion.h2>

            <motion.p
                className="text-[#aaa] text-center max-w-3xl mx-auto mt-6 mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
            >
                Beyond all things above, I enjoy competitive programming, music, sports,
                and exploring new places. I'm always looking for ways to grow and
                experience life fully — whether it's solving problems, dancing to my
                favorite songs, or capturing moments on camera.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Competitive Programming */}
                <motion.div
                    className="bg-cyan-500/5 p-5 rounded-lg"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-3 mb-2">
                        <Medal className="text-cyan-400" />
                        <h3 className="text-xl font-semibold">
                            Competitive Programming & Problem Solving
                        </h3>
                    </div>
                    <p className="text-[#bbb] text-sm mb-3">
                        I’ve recently started Competitive Programming on{" "}
                        <strong>Codeforces</strong> and <strong>CodeChef</strong>, and
                        regularly practice on <strong>LeetCode</strong>. I’ve solved{" "}
                        <strong>250+ DSA problems</strong>, earned several badges, and I'm
                        improving with consistent practice.
                    </p>
                    <div className="flex gap-5 mt-2 text-cyan-400">
                        <a
                            href="https://codeforces.com/profile/Rishabh_6389"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Codeforces"
                            className="hover:scale-110 transition"
                            title="Codeforces"
                        >
                            <Trophy size={20} />
                        </a>
                        <a
                            href="https://leetcode.com/u/Rishabh_63/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LeetCode"
                            className="hover:scale-110 transition"
                            title="LeetCode"
                        >
                            <Code size={20} />
                        </a>
                        
                        <a
                            href="https://www.codechef.com/users/when_rish_code"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="CodeChef"
                            className="hover:scale-110 transition"
                            title="CodeChef"
                        >
                            <Trophy size={20} />
                        </a>
                    </div>

                </motion.div>

                {/* Music & Dance */}
                <motion.div
                    className="bg-cyan-500/5 p-5 rounded-lg"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-3 mb-2">
                        <Music className="text-cyan-400" />
                        <h3 className="text-xl font-semibold">Music & Dance</h3>
                    </div>
                    <p className="text-[#bbb] text-sm">
                        I love vibing to Indian songs and dancing freely. Music is therapy,
                        and dancing helps me relax and recharge.
                    </p>
                </motion.div>

                {/* Movies & Web Series */}
                <motion.div
                    className="bg-cyan-500/5 p-5 rounded-lg"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-3 mb-2">
                        <Gamepad2 className="text-cyan-400" />
                        <h3 className="text-xl font-semibold">Movies & Web Series</h3>
                    </div>
                    <p className="text-[#bbb] text-sm">
                        A huge fan of Indian cinema — I love watching Bollywood movies and
                        bingeing on thrilling web series during breaks.
                    </p>
                </motion.div>

                {/* Sports */}
                <motion.div
                    className="bg-cyan-500/5 p-5 rounded-lg"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-3 mb-2">
                        <Gamepad2 className="text-cyan-400" />
                        <h3 className="text-xl font-semibold">Sports that I Love</h3>
                    </div>
                    <p className="text-[#bbb] text-sm">
                        I enjoy mostly indoor games — Carrom, Chess, Table Tennis, and
                        Badminton. Sports help keep my mind and body sharp.
                    </p>
                </motion.div>

                {/* Travel */}
                <motion.div
                    className="bg-cyan-500/5 p-5 rounded-lg"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-3 mb-2">
                        <Plane className="text-cyan-400" />
                        <h3 className="text-xl font-semibold">Travel</h3>
                    </div>
                    <p className="text-[#bbb] text-sm">
                        I love traveling to new places and exploring cultures. Every journey
                        adds something beautiful to my story.
                    </p>
                </motion.div>

                {/* Photography */}
                <motion.div
                    className="bg-cyan-500/5 p-5 rounded-lg"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-3 mb-2">
                        <Camera className="text-cyan-400" />
                        <h3 className="text-xl font-semibold">Photography</h3>
                    </div>
                    <p className="text-[#bbb] text-sm">
                        I enjoy capturing nature, moments, and portraits. You can check out
                        my clicks on my{" "}
                        <a
                            href="https://www.instagram.com/agrarishabh/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-cyan-400 hover:underline inline-flex items-center gap-1"
                        >
                            Instagram <Instagram size={16} />
                        </a>
                        .
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default MoreAbout;
