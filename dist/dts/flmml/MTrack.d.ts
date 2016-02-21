/// <reference path="MChannel.d.ts" />
/// <reference path="MPolyChannel.d.ts" />
/// <reference path="MEvent.d.ts" />
declare module flmml {
    class MTrack {
        static SAMPLE_RATE: number;
        static TEMPO_TRACK: number;
        static FIRST_TRACK: number;
        static DEFAULT_BPM: number;
        private m_bpm;
        private m_spt;
        private m_ch;
        private m_needle;
        private m_volume;
        private m_gate;
        private m_gate2;
        private m_events;
        private m_pointer;
        private m_delta;
        private m_isEnd;
        private m_globalTick;
        private m_lfoWidth;
        private m_totalMSec;
        private m_polyFound;
        private m_chordBegin;
        private m_chordEnd;
        private m_chordMode;
        constructor();
        getNumEvents(): number;
        onSampleData(samplesSt: Array<Float32Array>, start: number, end: number, isTempoTrack?: boolean): void;
        seek(delta: number): void;
        seekChordStart(): void;
        mute(f: boolean): void;
        isMuted(): boolean;
        recDelta(e: MEvent): void;
        recNote(noteNo: number, len: number, vel: number, keyon?: number, keyoff?: number, trace?: any[]): void;
        recNoteOff(noteNo: number, vel: number): void;
        recRest(len: number): void;
        recChordStart(): void;
        recChordEnd(): void;
        recRestMSec(msec: number): void;
        recVolume(vol: number): void;
        protected recGlobal(globalTick: number, e: MEvent): void;
        protected insertEvent(e: MEvent): void;
        protected makeEvent(trace?: any[]): MEvent;
        protected pushEvent(e: MEvent): void;
        recTempo(globalTick: number, tempo: number): void;
        recEOT(): void;
        recGate(gate: number): void;
        recGate2(gate2: number): void;
        recForm(form: number, sub: number): void;
        recEnvelope(env: number, attack: number, times: Array<number>, levels: Array<number>, release: number): void;
        recNoiseFreq(freq: number): void;
        recPWM(pwm: number): void;
        recPan(pan: number): void;
        recFormant(vowel: number): void;
        recDetune(d: number): void;
        recLFO(depth: number, width: number, form: number, subform: number, delay: number, time: number, target: number): void;
        recLPF(swt: number, amt: number, frq: number, res: number): void;
        recVolMode(m: number): void;
        recInput(sens: number, pipe: number): void;
        recOutput(mode: number, pipe: number): void;
        recExpression(ex: number): void;
        recRing(sens: number, pipe: number): void;
        recSync(mode: number, pipe: number): void;
        recClose(): void;
        recPortamento(depth: number, len: number): void;
        recMidiPort(mode: number): void;
        recMidiPortRate(rate: number): void;
        recPortBase(base: number): void;
        recPoly(voiceCount: number): void;
        recHwLfo(w: number, f: number, pmd: number, amd: number, pms: number, ams: number, syn: number): void;
        isEnd(): number;
        getRecGlobalTick(): number;
        seekTop(): void;
        conduct(trackArr: Array<MTrack>, trackEndMarginMsec: number): void;
        private calcSpt(bpm);
        private playTempo(bpm);
        getTotalMSec(): number;
        getTotalTimeStr(): string;
        getVoiceCount(): number;
        usingMono(): void;
        usingPoly(maxVoice: number): void;
        findPoly(): boolean;
    }
}